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
import { balancesCoins, balancesTokens } from "@/config/terraClassic";
import { Coin } from "@cosmjs/stargate";
import { useTranslation } from "react-i18next";

const renderBalance = (allBalances: Coin[], displayDenom: string) => {
    const idx = allBalances.findIndex((item) => item.denom === displayDenom);
    const coin = allBalances[idx];
    const item = balancesCoins[displayDenom];
    if (idx != -1) {
        return (
            <div
                className="flex items-center justify-between rounded-md py-4 px-10 mb-6"
                style={{
                    boxShadow: "0 0 24px rgb(59,130,246,.5)",
                }}
                key={displayDenom}
            >
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src={item.logo} alt="@terramint" />
                        <AvatarFallback>@terramint</AvatarFallback>
                    </Avatar>
                    <span className="ml-4 font-bold">{item.display}</span>
                </div>
                <div>
                    <span className="font-bold">
                        {(Number(coin.amount) / 6).toFixed(6)}
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="flex items-center justify-between rounded-md py-4 px-10 mb-6"
                style={{
                    boxShadow: "0 0 24px rgb(59,130,246,.5)",
                }}
                key={displayDenom}
            >
                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage src={item.logo} alt="@terramint" />
                        <AvatarFallback>@terramint</AvatarFallback>
                    </Avatar>
                    <span className="ml-4 font-bold">{item.display}</span>
                </div>
                <div>
                    <span className="font-bold">0</span>
                </div>
            </div>
        );
    }
};

const Home = () => {
    const { allBalances, allTokenBalances } = useAppSelector(
        (state) => state.app
    );
    const { t } = useTranslation();
    return (
        <div className="relative p-10 min-h-[calc(100vh-20px)] sm:min-h-[calc(100vh-40px)] pb-52">
            <Header></Header>
            <div className="grid grid-cols-12 mt-28 lg:mt-56 gap-4">
                <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <div>
                            <div className="text-6xl font-bold">
                                <h1 className="leading-[6rem]">
                                    {t("home.slogan")}
                                </h1>
                            </div>
                            <p className="text-2xl mt-8">
                                {t(
                                    "home.syntheticDollarAndInternetNativeYield"
                                )}
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
                </div>
                <div className="col-span-12 lg:col-start-6 lg:col-span-3 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="mx-auto">
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.webm" />
                    </video>
                </div>
                <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex items-center justify-center">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>{t("home.balances")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                {Object.keys(balancesCoins).map((key) =>
                                    renderBalance(allBalances, key)
                                )}
                                {Object.keys(balancesTokens).map((key, idx) => (
                                    <div
                                        className="flex items-center justify-between rounded-md py-4 px-10 mb-6"
                                        style={{
                                            boxShadow:
                                                "0 0 24px rgb(59,130,246,.5)",
                                        }}
                                        key={key}
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
                                                {key}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-bold">
                                                {allTokenBalances.length > 0
                                                    ? allTokenBalances[idx]
                                                          .amount
                                                    : 0}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button className="font-bold w-full">
                                {t("home.toGetMore")}
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
