import AppDivider from "./(components)/AppDivider";
import NextUITable from "./(components)/NextUITable";
import TailwindForms from "./(components)/TailwindForms";

export default function HomePage() {
    return (
        <main className="space-y-16">
            {/* next ui table */}
            <h1 className="text-2xl text-center font-semibold text-violet-500">
                Next UI Table Example
            </h1>
            <NextUITable />

            <AppDivider />

            {/* tailwind form */}
            <h1 className="text-2xl text-center font-semibold text-violet-500">
                Tailwind Form Example
            </h1>
            <TailwindForms />
        </main>
    );
}
