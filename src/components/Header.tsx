import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Icons } from "@/components/icons";
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
} from "@radix-ui/react-icons";
import { SigningStargateClient } from "@cosmjs/stargate";
import { useAppSelector, useAppDispatch } from "@/hooks";
import {
    setClient,
    setAddress,
    setAllBalances,
} from "@/store/modules/appStore";
import { useEffect } from "react";

const Header = () => {
    const { setTheme } = useTheme();
    const { client, chain, address } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    // 查余额
    useEffect(() => {
        if (!address && !client) return;
        getBalances();
    }, [address, client]);

    // 余额查询  Todo
    const getBalances = async () => {
        if (client.registry) {
            const _balances = await client.getAllBalances(address);
            dispatch(setAllBalances(_balances));
        }
    };

    // 断开链接钱包
    const disconnect = async () => {
        client.disconnect();
        await dispatch(setAddress(""));
        dispatch(setClient({} as SigningStargateClient));
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
        dispatch(setAddress(accounts[0].address));
        dispatch(setClient(tmpCli));
    };
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Icons.menu className="text-white h-8 w-8 lg:hidden"></Icons.menu>
                <div className="flex items-center mr-10">
                    <Avatar>
                        <AvatarImage
                            src="/src/assets/mint.png"
                            alt="@terramint"
                        />
                        <AvatarFallback>@terramint</AvatarFallback>
                    </Avatar>
                    <span className="dark:text-whit font-bold text-3xl">
                        TERRA MINT
                    </span>
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="text-lg">
                        <NavigationMenuItem className="cursor-pointer">
                            <NavigationMenuLink
                                className={
                                    navigationMenuTriggerStyle() + " text-lg"
                                }
                            >
                                Whitepaper
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="cursor-pointer">
                            <NavigationMenuLink
                                className={
                                    navigationMenuTriggerStyle() + " text-lg"
                                }
                            >
                                Airdrop
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="cursor-pointer">
                            <NavigationMenuLink
                                className={
                                    navigationMenuTriggerStyle() + " text-lg"
                                }
                            >
                                Claim $USDM
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="cursor-pointer">
                            <NavigationMenuLink
                                className={
                                    navigationMenuTriggerStyle() + " text-lg"
                                }
                            >
                                Leaderboard
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex items-center">
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
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>
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
