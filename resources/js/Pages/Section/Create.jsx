import { useState } from "react";
import { router } from '@inertiajs/react'
import MainLayout from "@/Layouts/MainLayout";

export default function Index() {

    const [values, setValues] = useState('');

    function handleChange(e) {
        setValues(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/sections', {title: values});
    }

    return (
        <MainLayout>
            <div>
                <div className="flex items-center py-4">
                    <h3 className=" text-xl mr-4">Добавить раздел</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            placeholder="Заголовок"
                            type="text"
                            className=" border-gray-300 p-2 w-1/4"
                            onChange={handleChange}
                            value={values}
                        />
                    </div>
                    <button className="my-4 w-1/4 bg-sky-500 border border-sky-600 text-white text-center"
                    type="submit">Добавить</button>
                </form>
            </div>
        </MainLayout>
    );
}
