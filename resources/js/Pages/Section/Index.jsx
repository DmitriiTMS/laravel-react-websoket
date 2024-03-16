import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function Index() {
    return (
        <MainLayout>
            <div>
                <div className="flex items-center mr-5">
                    <h3 className=" text-xl mr-4">Разделы</h3>
                    <Link
                        href={route("sections.create")}
                        className="block px-2 py-1  bg-white border border-gray-300 rounded-lg text-center mr-4"
                    >
                        + Разделы
                    </Link>
                    <Link
                        href={route("branches.create")}
                        className="block px-2 py-1  bg-white border border-gray-300 rounded-lg text-center"
                    >
                        + Ветки
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}
