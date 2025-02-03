import { SetStateType } from "@/common/types/reactTypes"

export type ReaderSettingActiveTabOptions = 'favorites' | 'comments' | 'likes' | 'preferences' | 'settings'
export type ReaderSettingsType = { initalActiveTab: ReaderSettingActiveTabOptions, setInitalActiveTab: SetStateType<ReaderSettingActiveTabOptions> }
