import Card from "@/Components/Card";
import TableWithPagination from "@/Components/TableComponents";
import { Head, Link, router } from "@inertiajs/react";
import axios from "axios";
import nProgress from "nprogress";
import { useEffect, useState } from "react";

export default function Page({ data }) {
    const [mapData, setMapData] = useState(data);
    nProgress.configure({ showSpinner: true });
    // nProgress.configure({ minimum: 0.1 });

    const fetchData = () => {
        nProgress.start();
        const response = axios
            .get("/users-api")
            .then((res) => {
                console.log(res);
                setTimeout(() => {
                    nProgress.done();
                }, 100);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => {
        return () => {
            fetchData();
        };
    });

    const dataUi = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com" },
        // Add more data as needed
    ];

    return (
        <>
            <Head title="HAHAHAHA" />
            <div class="container mx-auto py-6">
                <h1 class="text-2xl font-bold mb-4">Container with Columns</h1>
                <div class="grid grid-cols-4 gap-4">
                    <div class="col-span-1 bg-white p-4 shadow-md">
                        Column 1
                    </div>
                    <div class="col-span-1 bg-white p-4 shadow-md">
                        Column 2
                    </div>
                    <div className="col-span-1 bg-white p-4">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
