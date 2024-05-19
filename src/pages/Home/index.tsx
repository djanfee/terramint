import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/hooks";
import { balancesCoins, balancesTokens } from "@/config/terraClassic";
import { Coin } from "@cosmjs/stargate";
import { useTranslation } from "react-i18next";
import { Icons } from "@/components/icons";

const renderBalance = (allBalances: Coin[], displayDenom: string) => {
    const idx = allBalances.findIndex((item) => item.denom === displayDenom);
    const coin = allBalances[idx];
    const item = balancesCoins[displayDenom];
    if (idx != -1) {
        return (
            <div
                className="flex items-center justify-between rounded-md py-2 px-10 mb-4"
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
                        {(Number(coin.amount) / 1000000).toFixed(2)}
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="flex items-center justify-between rounded-md py-2 px-10 mb-4"
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
        <div className="relative p-4 xl:px-10 min-h-[calc(100vh-20px)] sm:min-h-[calc(100vh-40px)] pb-52">
            <Header></Header>
            <div className="grid grid-cols-12 gap-4 h-full pt-10">
                <div className="col-span-12 xl:col-span-6 flex items-center justify-center relative top-[-4rem] pt-10">
                    <div className="flex items-center justify-center">
                        <div>
                            <div className="text-3xl md:text-[4rem] leading-tight md:leading-[4.5rem] font-semibold break-words">
                                <h1 className="leading-10 xl:leading-[6rem]">
                                    {t("home.slogan")}
                                </h1>
                            </div>
                            <p className="text-lg mt-4 xl:mt-8">
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
                                <span>sUSDM APY 15.9%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xl:col-start-7 xl:col-span-3 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="mx-auto">
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.webm" />
                    </video>
                </div>
                <div className="col-span-12 xl:col-start-10 xl:col-span-3 flex flex-col items-center justify-center gap-6">
                    <div className="w-full">
                        <Card className="w-full">
                            <div className="flex justify-center py-2 font-bold">
                                <span>{t("home.balances")}</span>
                            </div>
                            <CardContent>
                                <div>
                                    {Object.keys(balancesCoins).map((key) =>
                                        renderBalance(allBalances, key)
                                    )}
                                    {Object.keys(balancesTokens).map(
                                        (key, idx) => (
                                            <div
                                                className="flex items-center justify-between rounded-md py-2 px-10 mb-4"
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
                                                        {allTokenBalances.length >
                                                        0
                                                            ? allTokenBalances[
                                                                  idx
                                                              ].amount / 1000000
                                                            : 0}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full mt-6">
                            <div className="flex justify-center py-2 font-bold">
                                <span>{t("home.backedBy")}</span>
                            </div>
                            <CardContent>
                                <div className="flex justify-center gap-4">
                                    <Icons.binance className="w-16"></Icons.binance>
                                    <Icons.okx className="w-9"></Icons.okx>
                                    <img
                                        src="https://i.ibb.co/x5LsqmS/photo-2024-05-19-12-44-02.jpg"
                                        alt="coinhall"
                                        className="w-10 h-10"
                                    />
                                    <img
                                        src="https://i.ibb.co/g7YLf7f/photo-2024-05-19-12-44-02-2.jpg"
                                        alt="terraport"
                                        className="w-7 h-7 relative top-1"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
