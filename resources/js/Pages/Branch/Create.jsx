import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import axios from "axios";

export default function Index({ sections, errors }) {
    const [values, setValues] = useState({
        title: "",
        section_id: "Выберите раздел",
        parent_id: null,
    });
    const [branches, setBranches] = useState([]);

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

    async function getBranch() {
        try {
            const response = await axios.get(
                `/sections/${Number(values.section_id)}/branches`
            );
            setBranches(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const id = Number(values.section_id);
        if (typeof id === "number" && !isNaN(id)) {
            getBranch();
        }
    }, [values.section_id]);

    return (
        <MainLayout>
            <div>
                <div className="flex items-center py-4">
                    <h3 className=" text-xl mr-4">Добавить ветку</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <select
                            name="section_id"
                            onChange={handleChange}
                            value={values.section_id}
                            className="cursor-pointer border-gray-300 w-1/4"
                        >
                            <option value="Выберите раздел" disabled>
                                Выберите раздел
                            </option>
                            {sections.map((element) => {
                                return (
                                    <option key={element.id} value={element.id}>
                                        {element.title}
                                    </option>
                                );
                            })}
                        </select>
                        <div>
                            {errors.section_id && (
                                <span className="text-red-500 text-xs">
                                    {errors.section_id}
                                </span>
                            )}
                        </div>
                    </div>

                    {branches.length > 0 && (
                        <div>
                            <select
                                name="parent_id"
                                onChange={handleChange}
                                value={
                                    values.parent_id === null
                                        ? "Выберите род. ветку"
                                        : ""
                                }
                                className="mb-5 cursor-pointer border-gray-300 w-1/4"
                            >
                                <option value="Выберите род. ветку" disabled>
                                    Выберите род. ветку
                                </option>
                                {branches &&
                                    branches.map((element) => {
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
                        </div>
                    )}

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
                    <div>
                        {errors.title && (
                            <span className="text-red-500 text-xs">
                                {errors.title}
                            </span>
                        )}
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
