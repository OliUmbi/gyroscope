import "./breadcrumbs.scss";
import {Fragment, useEffect, useState} from "react";
import {Breadcrumb} from "./breadcrumbs.props";
import Icon from "../icon/icon";
import {Link, useLocation} from "react-router-dom";
import Text from "../text/text.tsx";

const Breadcrumbs = () => {

    const location = useLocation()
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[] | undefined>();

    useEffect(() => {

        const url = decodeURI(location.pathname);
        const crumbs = url.split("/");
        const breadcrumbs: Breadcrumb[] = []

        breadcrumbs.push({
            label: "root",
            path: "/"
        })

        for (let i = 1; i < crumbs.length; i++) {

            if (crumbs[i] === "") {
                continue;
            }

            let label = crumbs[i]

            if (label.length > 10) {
                label = label.substring(0, 8)
                label += "..."
            }

            const breadcrumb: Breadcrumb = {
                label: label,
                path: crumbs.slice(0, i + 1).join("/")
            }

            breadcrumbs.push(breadcrumb)
        }

        setBreadcrumbs(breadcrumbs)
    }, [location])

    return (
        <>
            {
                breadcrumbs !== undefined ? (
                    <div className="breadcrumbs">
                        {
                            breadcrumbs.map((breadcrumb, key) => (
                                <Fragment key={key}>
                                    <Icon>chevron_right</Icon>
                                    <Link className="breadcrumbs__crumb" to={breadcrumb.path}>
                                        <Text type="s" mono={true} bold={breadcrumbs.length - 1 === key} highlight={breadcrumbs.length - 1 === key}>{breadcrumb.label}</Text>
                                    </Link>
                                </Fragment>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    )
}

export default Breadcrumbs;
