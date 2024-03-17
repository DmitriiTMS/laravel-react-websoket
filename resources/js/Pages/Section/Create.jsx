import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Index() {

    const [values, setValues] = useState({
        title: "",
    });
    const [isValid, setIsValid] = useState(false);
    const [isError, setIsError] = useState(false);

    function handleChange(e) {
        const key = e.target.name;
        setValues((values) => ({
            ...values,
            [key]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            setIsError(false)
            router.post("/sections", values);
        } else {
            setIsError(true)
        }
    }

    useEffect(() => {
        if (values.title) {
            setIsValid(true);
            setIsError(false)
        } else {
            setIsValid(false);
        }
    }, [values.title]);

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
                            value={values.title}
                            name="title"
                        />
                        {isError ? <p className="text-red-500 text-xs">Заполните поле</p> : null}
                    </div>
                    <button
                        className="my-4 w-1/4 bg-sky-500 borderborder-none text-white text-center"
                        type="submit"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}
