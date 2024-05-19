import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="relative p-4 xl:p-10 min-h-[calc(100vh-20px)] sm:min-h-[calc(100vh-40px)] pb-52">
            <Header></Header>
            <div className="grid grid-cols-12 gap-4 mt-10 min-h-[60rem]">
                <div className="col-span-12 xl:col-span-5 flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <div>
                            <div className="text-3xl xl:text-6xl font-bold">
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
                <div className="col-span-12 xl:col-start-6 xl:col-span-3 flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="mx-auto">
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/611153e7af981472d8da199c/62cfd854bf4cb1f9af5a784d_04Scroll-C-transcode.webm" />
                    </video>
                </div>
                <div className="col-span-12 xl:col-start-9 xl:col-span-4 flex flex-col items-center justify-center gap-6">
                    <div className="w-full">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex justify-center">
                                        <span>{t("home.balances")}</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    {Object.keys(balancesCoins).map((key) =>
                                        renderBalance(allBalances, key)
                                    )}
                                    {Object.keys(balancesTokens).map(
                                        (key, idx) => (
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
                                                        {allTokenBalances.length >
                                                        0
                                                            ? allTokenBalances[
                                                                  idx
                                                              ].amount
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
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex justify-center">
                                        <span>{t("home.backedBy")}</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-center gap-4">
                                    <Icons.binance className="w-16"></Icons.binance>
                                    <Icons.okx className="w-9"></Icons.okx>
                                    <Icons.coinhall className="w-9"></Icons.coinhall>
                                    <img
                                        src="https://terraport.finance/static/media/terra.acc8be7042040fb33331.png"
                                        alt="terraport"
                                        className="w-8 h-8"
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
