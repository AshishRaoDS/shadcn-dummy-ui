import { Skeleton } from "y/skeleton";

export default function Loading() {
    return (
        <main className="m-24 rounded-md grid grid-cols-4 gap-12">
            {
                Array.from({ length: 10 }, (_, index) => index + 1).map((id) => {
                    return <div key={id} className="ng-white p-8 col-span-4 md:col-span-2">
                        <Skeleton className="w-1/2 h-6 bg-gray-200"></Skeleton>
                        <Skeleton className="h-3 w-10 bg-gray-200 mt-2 mb-4"></Skeleton>
                        <Skeleton className="roundex-md h-80 w-full bg-gray-200"></Skeleton>
                    </div>;
                })
            }
        </main>
    );
}