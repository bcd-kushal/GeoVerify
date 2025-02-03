import Link from "next/link"
import { TitleType } from "./utils/types"
import { TITLE_STYLES } from "./utils/constants"

export default function Title({ config }: { config: TitleType }) {
    const { type, label, variant } = config

    if (variant === "blog") {  // BLOG ===========================
        if (type === "link")
            return (
                <Link href={config.href} target={config.target === "new-tab" ? "_blank" : "_self"} prefetch>
                    <h1 className={TITLE_STYLES.blog}>{label}</h1>
                </Link>
            )

        return <h1 className={TITLE_STYLES.blog}>{label}</h1>
    }

    else if (variant === "category") {  // CATEGORY ==========================================
        if (type === "link")
            return (
                <Link href={config.href} target={config.target === "new-tab" ? "_blank" : "_self"} prefetch className={TITLE_STYLES.category}>
                    {label}
                </Link>
            )

        return (
            <div className={TITLE_STYLES.category}>{label}</div>
        )
    }

    else {  // SETTINGS PANEL ==========================================
        if (type === "link")
            return (
                <Link href={config.href} target={config.target === "new-tab" ? "_blank" : "_self"} prefetch className={TITLE_STYLES.settings}>
                    {label}
                </Link>
            )

        return (
            <div className={TITLE_STYLES.settings}>{label}</div>
        )
    }
}