import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Index() {
    const [isValid, setIsValid] = useState(false);
    const [values, setValues] = useState({
        title: "",
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
        router.post("/sections", values);
    }

    useEffect(() => {
        if(values.title) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    },[values.title])

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
                    </div>
                    <button
                        className={`my-4 w-1/4 ${isValid ? 'bg-sky-500 border' : 'bg-slate-400'} border-none text-white text-center `}
                        type="submit"
                        disabled={isValid ? false : true}
                    >
                        Добавить
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}
