package ch.oliumbi.cia.implementation.member;

import ch.oliumbi.cia.configs.EncodingConfig;
import ch.oliumbi.cia.configs.SecurityProperties;
import ch.oliumbi.cia.errorhandling.UnauthorizedException;
import ch.oliumbi.cia.implementation.member.dtos.MemberAuthenticationDTO;
import ch.oliumbi.cia.implementation.member.dtos.MemberDTO;
import ch.oliumbi.cia.enums.Role;
import ch.oliumbi.cia.implementation.member.dtos.MemberLoginDTO;
import ch.oliumbi.cia.implementation.member.dtos.MemberSessionDTO;
import java.time.LocalDateTime;
import java.util.UUID;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

  private final MemberRepository memberRepository;
  private final EncodingConfig encodingConfig;
  private final SecurityProperties securityProperties;

  public MemberService(MemberRepository memberRepository, EncodingConfig encodingConfig, SecurityProperties securityProperties) {
    this.memberRepository = memberRepository;
    this.encodingConfig = encodingConfig;
    this.securityProperties = securityProperties;
  }

  public MemberDTO load(String token) {
    return new MemberDTO(Role.MEMBER);
  }

  public MemberAuthenticationDTO login(MemberLoginDTO memberLoginDTO) {

    MemberDTO memberDTO = memberRepository.loadByUsername(memberLoginDTO.getUsername());

    if (!encodingConfig.passwordEncoder().matches(memberLoginDTO.getPassword(), memberDTO.getPassword())) {
      throw new UnauthorizedException("invalid credentials");
    }

    MemberSessionDTO memberSessionDTO = new MemberSessionDTO();
    memberSessionDTO.setId(UUID.randomUUID());
    memberSessionDTO.setMemberId(memberDTO.getId());
    memberSessionDTO.setToken(RandomStringUtils.random(32));
    memberSessionDTO.setExpires(LocalDateTime.now().plusHours(securityProperties.getExpiration()));

    memberRepository.createSession(memberSessionDTO);

    MemberAuthenticationDTO memberAuthenticationDTO = new MemberAuthenticationDTO();
    memberAuthenticationDTO.setId(memberDTO.getId());
    memberAuthenticationDTO.setNumber(memberDTO.getNumber());
    memberAuthenticationDTO.setYear(memberDTO.getYear());
    memberAuthenticationDTO.setSemester(memberDTO.getSemester());
    memberAuthenticationDTO.setUsername(memberDTO.getUsername());
    memberAuthenticationDTO.setRole(memberDTO.getRole());
    memberAuthenticationDTO.setToken(memberSessionDTO.getToken());
    memberAuthenticationDTO.setExpires(memberSessionDTO.getExpires());

    return memberAuthenticationDTO;
  }
}
