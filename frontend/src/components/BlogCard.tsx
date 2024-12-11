import { Link } from "react-router-dom";

interface BlogCardProps {
    author: string,
    title: string,
    content: string,
    publishedDate: string,
    id: number
}

export default function BlogCard({ author, title, content, publishedDate, id }: BlogCardProps) {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <Avatar name={author} />
                    <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{author}</div>
                    <div className="flex justify-center flex-col pl-2 text-sm">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
    );
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center ${(size == "small" ? "w-6 h-6" : "w-10 h-10")} overflow-hidden bg-gray-700 rounded-full`}>
            <span className={`${(size === "small" ? "text-xs" : "text-md")} text-gray-400`}>{name[0].toUpperCase()}</span>
        </div>
    );
}

export function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
    );
}