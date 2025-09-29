import MapSection from "../components/MapSection";
import PlantsUpload from "./Dashboard/PlantUpload"

export default function Home() {
    return (
        <div>
            <section className="p-6">
                <h1 className="text-3xl text-center font-bold mb-4">Welcome to PlantRadar 🌱</h1>
                <p className="mb-6 text-center">Track plant health, locations, and data in real time.</p>
                <PlantsUpload></PlantsUpload>
                <MapSection />
                
            </section>
        </div>
    );
}
