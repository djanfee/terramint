import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/hooks";

const Home = () => {
    const { allBalances } = useAppSelector((state) => state.app);
    return (
        <div className="relative p-10 min-h-[calc(100vh-20px)] sm:min-h-[calc(100vh-40px)] pb-52">
            <Header></Header>
            <div className="grid grid-cols-12 mt-56 gap-4">
                <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
                    <div className="lg:pl-44">
                        <div className="text-6xl font-bold">
                            <h1>ENABLING THE</h1>
                            <h1 className="mt-8">INTERNET BOND_</h1>
                        </div>
                        <p className="text-2xl mt-8">
                            Synthetic Dollar and Internet Native Yield
                        </p>
                        <div
                            className="flex items-center justify-center w-44 h-10 dark:bg-slate-800 rounded-sm mt-8"
                            style={{
                                boxShadow: "0 0 24px rgb(59,130,246,.5)",
                            }}
                        >
                            <span>$USDM APY 15.9%</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-start-6 lg:col-span-3 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="mx-auto">
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.webm" />
                    </video>
                </div>
                <div className="col-span-12 lg:col-start-9 lg:col-span-5 flex items-center justify-center">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Balances</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                {allBalances.map((item) => (
                                    <div
                                        className="flex items-center justify-between rounded-md py-4 px-10 mb-6"
                                        style={{
                                            boxShadow:
                                                "0 0 24px rgb(59,130,246,.5)",
                                        }}
                                        key={item.denom}
                                    >
                                        <div className="flex items-center">
                                            <Avatar>
                                                <AvatarImage
                                                    src="/src/assets/mint.png"
                                                    alt="@terramint"
                                                />
                                                <AvatarFallback>
                                                    @terramint
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="ml-4 font-bold">
                                                $
                                                {item.denom == "uluna"
                                                    ? "LUNC"
                                                    : item.denom
                                                          .substring(1)
                                                          .toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-bold">
                                                {item.amount.substring(
                                                    0,
                                                    item.amount.length - 6
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button className="font-bold w-full">
                                To Claim More
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
