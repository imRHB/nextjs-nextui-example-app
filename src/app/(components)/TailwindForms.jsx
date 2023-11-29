import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function TailwindForms() {
    return (
        <div className="flex items-center justify-center">
            <div className="py-8 w-full xs:max-w-lg sm:max-w-xl">
                <form className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Email
                            </label>
                        </div>
                        <div className="mt-3 rounded-md relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <EnvelopeIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="block p-3 pl-10 w-full rounded-md bg-transparent border-2 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:bg-transparent sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-3 rounded-md relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="* * * *"
                                className="block p-3 pl-10 w-full rounded-md bg-transparent border-2 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:bg-transparent sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-5 py-3 bg-green-500 text-white text-base font-semibold rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
