import { useState } from "react";
import { router } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Index({ sections }) {

    const [values, setValues] = useState({
        title: "",
        section_id: "Выберите раздел",
    });

    function handleChange(e) {
        const key = e.target.name;
        setValues((values) => ({
            ...values,
            [key]: e.target.value,
        }));

    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/branches", values);
    }

    return (
        <MainLayout>
            <div>
                <div className="flex items-center py-4">
                    <h3 className=" text-xl mr-4">Добавить ветку</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <select
                        name="section_id"
                        onChange={handleChange}
                        value={values.section_id}
                        className="mb-5 cursor-pointer border-gray-300 w-1/4"
                    >
                        <option value="Выберите раздел" disabled>
                            Выберите раздел
                        </option>
                        {sections.map((element) => {
                            return (
                                <option
                                    key={element.id}
                                    value={element.id}
                                >
                                    {element.title}
                                </option>
                            );
                        })}
                    </select>
                    <div>
                        <input
                            placeholder="Заголовок"
                            type="text"
                            className=" border-gray-300 p-2 w-1/4"
                            onChange={handleChange}
                            value={values.title}
                            name="title"
                        />
                    </div>
                    <button
                        className="my-4 w-1/4 bg-sky-500 border border-sky-600 text-white text-center"
                        type="submit"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}
