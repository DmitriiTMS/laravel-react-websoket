import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function Index() {
    return (
        <MainLayout>
            <div>
                <div className="flex items-center">
                    <h3 className=" text-xl mr-4">Разделы</h3>
                    <Link
                        href={route("sections.create")}
                        className="block px-2 py-1 w-8 bg-white border border-gray-300 rounded-lg text-center"
                    >
                        +
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}
