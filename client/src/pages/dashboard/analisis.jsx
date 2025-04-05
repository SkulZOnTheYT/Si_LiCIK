import EcommerceMetrics from "../../component/analyst/EcommerceMetrics";
import MonthlySalesChart from "../../component/analyst/MonthlySalesChart";
import StatisticsChart from "../../component/analyst/StatisticsChart";
import MonthlyTarget from "../../component/analyst/MonthlyTarget";
import RecentOrders from "../../component/analyst/RecentOrders";
import DemographicCard from "../../component/analyst/DemographicCard";
import PageMeta from "../../component/common/PageMeta";

export default function Analisis() {
    return (
        <main>
            <PageMeta title="Analisis | SiLiCIK" description="Halaman analisis finansial" />
            <div className="grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-12 space-y-6 xl:col-span-7">
                    <EcommerceMetrics />
                    <MonthlySalesChart />
                </div>
        
                <div className="col-span-12 xl:col-span-5">
                    <MonthlyTarget />
                </div>
        
                <div className="col-span-12">
                    <StatisticsChart />
                </div>
        
                <div className="col-span-12 xl:col-span-5">
                    <DemographicCard />
                </div>
        
                <div className="col-span-12 xl:col-span-7">
                    <RecentOrders />
                </div>
            </div>
        </main>
    )
}