export default function NotificationCard({ message, isRead = false }: { message: string, isRead: boolean }) {
    return (
        <div className="p-4 border border-t-4 rounded-md my-2 relative">
            <p className="text-black text-left">{message}</p>
            {!isRead && <div className="absolute h-4 w-4 rounded-full bg-red-500/70 top-0 right-0 translate-x-2 -translate-y-2">
                <div className="absolute h-4 w-4 rounded-full bg-red-500/70 top-0 right-0 animate-ping">
                </div>
            </div>}
        </div>
    )
}
