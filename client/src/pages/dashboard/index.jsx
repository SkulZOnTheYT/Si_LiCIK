import PageMeta from "../../component/common/PageMeta";

import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <main>
            <PageMeta title="Dashboard | SiLiCIK" description="Halaman dashboard financial" />
            <Outlet />
            
        </main>
    )
}