import { useState } from "react"
import { ReaderSettingActiveTabOptions, ReaderSettingsType } from "./utils/types"
import { DEFAULT_SETTING_OPEN_TAB } from "./utils/constants"

export default function ReaderSettings({ initalActiveTab, setInitalActiveTab }: ReaderSettingsType) {
    const [activeTab, setActiveTab] = useState<ReaderSettingActiveTabOptions>(initalActiveTab || DEFAULT_SETTING_OPEN_TAB)
    return (
        <></>
    )
}