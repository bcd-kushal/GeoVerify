import { getSlug } from "@/common/utils/getSlug";
import Link from "next/link";

export default function Tag({label,type}:{label:string,type:"link"|"text"}) {
    return type==="text" ? <span className="rounded-full p-1 px-3 bg-zinc-300 dark:bg-zinc-800 truncate">{label}</span> : <Link href={`/category/${getSlug(label)}`} className="rounded-full p-1 px-3 bg-zinc-300 dark:bg-zinc-800 truncate transition-all duration-300 hover:bg-zinc-800 hover:text-white/90 dark:hover:bg-zinc-300 dark:hover:text-black/90">{label}</Link>
}