import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DragHandleHorizontalIcon, GlobeIcon } from "@radix-ui/react-icons";
import { SigningStargateClient } from "@cosmjs/stargate";
import { useAppSelector, useAppDispatch } from "@/hooks";
import {
    setClient,
    setAddress,
    setAllBalances,
    setCosmCli,
    setAllTokenBalances,
} from "@/store/modules/appStore";
import { useEffect, useState } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { balancesTokens } from "@/config/terraClassic";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

const Header = () => {
    const { client, chain, address, cosmCli } = useAppSelector(
        (state) => state.app
    );
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();
    const tabs: string[] = [
        t("header.nav.mintAndAirdrop"),
        t("header.nav.buy"),
        t("header.nav.stake"),
        t("header.nav.community"),
        t("header.nav.docs"),
        t("header.nav.whitepaper"),
    ];
    const [curLang, setCurLang] = useState("");
    // 初始化 chain
    useEffect(() => {
        connectWallet();
    }, [chain]);

    // 查余额
    useEffect(() => {
        if (!address && !client) return;
        getBalances();
    }, [address, client]);

    // 余额查询  Todo
    const getBalances = async () => {
        if (client.registry) {
            client
                .getAllBalances(address)
                .then((res) => {
                    dispatch(setAllBalances(res));
                })
                .catch((err) => {
                    console.error(err);
                });

            const tokenBalList = await Promise.all([
                cosmCli.queryContractSmart(balancesTokens.MINT.address, {
                    balance: {
                        address: address,
                    },
                }),
                cosmCli.queryContractSmart(balancesTokens.USDM.address, {
                    balance: {
                        address: address,
                    },
                }),
            ]);
            dispatch(
                setAllTokenBalances(
                    tokenBalList.map((val, idx) => {
                        if (idx == 0) {
                            return { amount: val.balance, symbol: "MINT" };
                        }
                        if (idx == 1) {
                            return { amount: val.balance, symbol: "USDM" };
                        }
                    })
                )
            );
        }
    };

    // 断开链接钱包
    // const disconnect = async () => {
    //     await Promise.all([client.disconnect(), cosmCli.disconnect()]);
    //     dispatch(setAddress(""));
    //     dispatch(setClient({} as SigningStargateClient));
    //     dispatch(setCosmCli({} as SigningCosmWasmClient));
    //     dispatch(setAllBalances([]));
    //     dispatch(setAllTokenBalances([]));
    // };

    // 点击链接钱包
    const handleClickConnect = () => {
        if (address != "") {
            return;
        }
        connectWallet();
    };
    // 连接keplr钱包  Todo
    const connectWallet = async () => {
        if (!window.keplr) {
            alert("Please install keplr extension");
            return;
        }
        await window.keplr.enable(chain.chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chain.chainId);

        const accounts = await offlineSigner.getAccounts();

        const tmpCli = await SigningStargateClient.connectWithSigner(
            chain.rpc,
            offlineSigner
        );
        const cosmCli = await SigningCosmWasmClient.connectWithSigner(
            chain.rpc,
            offlineSigner
        );
        dispatch(setCosmCli(cosmCli));
        dispatch(setAddress(accounts[0].address));
        dispatch(setClient(tmpCli));
    };

    const changeLanguage = (lang: "zh" | "en") => {
        i18n.changeLanguage(lang);
        setCurLang(lang.toUpperCase());
    };
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex items-center mr-4">
                    <Avatar className="w-6 h-6 lg:w-10 lg:h-10">
                        <AvatarImage
                            src="/src/assets/mint.png"
                            alt="@terramint"
                        />
                        <AvatarFallback>@terramint</AvatarFallback>
                    </Avatar>
                    <span className="dark:text-whit lg:font-bold text-lg lg:text-3xl">
                        TERRAMINT
                    </span>
                </div>
                <NavigationMenu className="hidden lg:block">
                    <NavigationMenuList className="text-lg">
                        {tabs.map((item) => (
                            <NavigationMenuItem
                                className="cursor-pointer"
                                key={item}
                            >
                                <NavigationMenuLink
                                    className={
                                        navigationMenuTriggerStyle() +
                                        " text-lg"
                                    }
                                >
                                    {item}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center">
                <div className="lg:hidden flex flex-col items-center mr-4">
                    <p className="text-sm">Yield</p>
                    <p className="font-bold text-blue-200">15.9%</p>
                </div>
                <span className="mr-4 hidden lg:block">sUSDM APY: 15.9%</span>
                <span className="mr-4 hidden lg:block">TVL: 2.11B</span>
                <Button size="sm" onClick={handleClickConnect} className="ml-2">
                    {client.registry
                        ? address.length > 13
                            ? address.substring(0, 3) +
                              "..." +
                              address.substring(address.length - 4)
                            : ""
                        : t("header.connectWallet")}
                </Button>
                <div className="lg:hidden ml-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <DragHandleHorizontalIcon className="h-6 w-6"></DragHandleHorizontalIcon>
                                <span className="sr-only">
                                    Expand Navigation
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {tabs.map((item) => (
                                <DropdownMenuItem key={item}>
                                    {item}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="lg:flex lg:items-center hidden gap-4 ml-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <GlobeIcon
                                    className={classnames(
                                        "h-[1.2rem]",
                                        "w-[1.2rem]",
                                        {
                                            hidden: curLang !== "",
                                        }
                                    )}
                                ></GlobeIcon>
                                <span
                                    className={classnames({
                                        hidden: curLang === "",
                                    })}
                                >
                                    {curLang}
                                </span>
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => changeLanguage("zh")}
                            >
                                中文
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => changeLanguage("en")}
                            >
                                English
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Header;
