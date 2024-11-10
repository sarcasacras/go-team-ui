export default function ProjectCard({ name, description }: { name: string; description: string }) {
    return (
        <div className="bg-go-green p-3 rounded-lg mb-3 border-t-go-green-shadow border-t-4">
            <h3 className="text-black text-xl font-light">{name}</h3>
            <p className="text-sm text-black py-2">{description}</p>
        </div>
    );
}