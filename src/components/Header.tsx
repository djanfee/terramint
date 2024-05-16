import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ThemeProvider";
import {
    TwitterLogoIcon,
    GitHubLogoIcon,
    DiscordLogoIcon,
    DragHandleHorizontalIcon,
} from "@radix-ui/react-icons";
import { SigningStargateClient } from "@cosmjs/stargate";
import { useAppSelector, useAppDispatch } from "@/hooks";
import {
    setClient,
    setAddress,
    setAllBalances,
    setCosmCli,
    setAllTokenBalances,
} from "@/store/modules/appStore";
import { useEffect } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { balancesTokens } from "@/config/terraClassic";

const Header = () => {
    const { setTheme } = useTheme();
    const { client, chain, address, cosmCli } = useAppSelector(
        (state) => state.app
    );
    const dispatch = useAppDispatch();

    const tabs: string[] = [
        "Whitepaper",
        "Airdrop",
        "Claim $USDM",
        "Leaderboard",
    ];

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
    const disconnect = async () => {
        await Promise.all([client.disconnect(), cosmCli.disconnect()]);
        dispatch(setAddress(""));
        dispatch(setClient({} as SigningStargateClient));
        dispatch(setCosmCli({} as SigningCosmWasmClient));
        dispatch(setAllBalances([]));
        dispatch(setAllTokenBalances([]));
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
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="lg:hidden">
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

                <div className="flex items-center mr-10">
                    <Avatar>
                        <AvatarImage
                            src="/src/assets/mint.png"
                            alt="@terramint"
                        />
                        <AvatarFallback>@terramint</AvatarFallback>
                    </Avatar>
                    <span className="dark:text-whit font-bold text-xl lg:text-3xl">
                        TERRA MINT
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
                <div className="lg:flex lg:items-center hidden">
                    <TwitterLogoIcon className="h-6 w-6 mr-4 cursor-pointer"></TwitterLogoIcon>
                    <GitHubLogoIcon className="h-6 w-6 mr-4 cursor-pointer"></GitHubLogoIcon>
                    <DiscordLogoIcon className="h-6 w-6 mr-4 cursor-pointer"></DiscordLogoIcon>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme("system")}
                            >
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <p className="ml-4">
                    {address.length > 13
                        ? address.substring(0, 10) +
                          "..." +
                          address.substring(address.length - 5)
                        : ""}
                </p>
                <Button
                    onClick={client.registry ? disconnect : connectWallet}
                    className="ml-4"
                >
                    {client.registry ? "Disconnect Wallet" : "Connect Wallet"}
                </Button>
            </div>
        </div>
    );
};

export default Header;
