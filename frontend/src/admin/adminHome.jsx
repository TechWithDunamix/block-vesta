import { useEffect, useState } from "react";
import { callMainApi } from "../utils";
import AdminLayout from "./layout";
import { UserOutlined, DollarCircleOutlined, SyncOutlined, CheckCircleOutlined } from '@ant-design/icons';

const AdminHome = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const req = await callMainApi("/admin");
            console.log(req)
            setData(req.data);  // Assuming the API response structure
        };
        fetchData();
    }, []);

    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Admin Home</h1>
                    {data ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <CustomCard
                                icon={<UserOutlined className="text-3xl" />}
                                title="Activated Users"
                                value={data.activated_users}
                                bgColor="bg-blue-200"
                                cardStyle="sm:h-32 md:h-40"
                            />
                            <CustomCard
                                icon={<UserOutlined className="text-3xl" />}
                                title="Non-Activated Users"
                                value={data.non_activated_users}
                                bgColor="bg-red-200"
                                cardStyle="sm:h-32 md:h-40"
                            />
                            <CustomCard
                                icon={<DollarCircleOutlined className="text-3xl" />}
                                title="Total Deposits"
                                value={`$${data.total_deposits.amount__sum && data.total_deposits.amount__sum.toLocaleString()}`}
                                bgColor="bg-blue-200"
                                cardStyle="sm:h-28 md:h-32 border-2 border-blue-400"
                            />
                            <CustomCard
                                icon={<DollarCircleOutlined className="text-3xl" />}
                                title="Total Withdrawals"
                                value={`$${data.total_withdrawal.amount__sum && data.total_withdrawal.amount__sum.toLocaleString()}`}
                                bgColor="bg-yellow-200"
                                cardStyle="sm:h-28 md:h-32 border-2 border-yellow-400"
                            />
                            <CustomCard
                                icon={<SyncOutlined className="text-3xl" />}
                                title="Pending Withdrawals"
                                value={data.pending_withdrawals}
                                bgColor="bg-orange-200"
                                cardStyle="sm:h-28 md:h-32 border-2 border-orange-400"
                            />
                            <CustomCard
                                icon={<CheckCircleOutlined className="text-3xl" />}
                                title="Approved Withdrawals"
                                value={data.approved_withdrawals}
                                bgColor="bg-purple-200"
                                cardStyle="sm:h-28 md:h-32 border-2 border-purple-400"
                            />
                            <CustomCard
                                icon={<SyncOutlined className="text-3xl" />}
                                title="Pending Deposits"
                                value={data.pending_deposits}
                                bgColor="bg-pink-200"
                                cardStyle="sm:h-28 md:h-32 border-2 border-pink-400"
                            />
                            <CustomCard
                                icon={<CheckCircleOutlined className="text-3xl" />}
                                title="Approved Deposits"
                                value={data.approved_deposits}
                                bgColor="bg-indigo-200"
                                cardStyle="sm:h-28 md:h-32 border-2 border-indigo-400"
                            />
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

const CustomCard = ({ icon, title, value, bgColor, cardStyle }) => (
    <div className={`${bgColor} shadow-lg rounded-lg p-6 flex items-center ${cardStyle}`}>
        <div className="mr-4 text-indigo-600">{icon}</div>
        <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-xl font-bold">{value}</p>
        </div>
    </div>
);

export default AdminHome;
