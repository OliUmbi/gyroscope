package ch.oliumbi.cia.implementation.member;

import ch.oliumbi.cia.implementation.member.dtos.MemberAuthenticationDTO;
import ch.oliumbi.cia.implementation.member.dtos.MemberDTO;
import ch.oliumbi.cia.enums.Role.Permission;
import ch.oliumbi.cia.implementation.member.dtos.MemberLoginDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Member")
@RestController
public class MemberController {

  private final MemberService memberService;

  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }

  @GetMapping("/login")
  public ResponseEntity<MemberAuthenticationDTO> login(@RequestBody MemberLoginDTO memberLoginDTO) {
    return ResponseEntity.ok(memberService.login(memberLoginDTO));
  }

  @Secured({Permission.MEMBER})
  @GetMapping("/person")
  public ResponseEntity<MemberDTO> load() {
    return ResponseEntity.ok(memberService.load("asdf"));
  }
}
