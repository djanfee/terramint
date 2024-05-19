import {
    TwitterLogoIcon,
    GitHubLogoIcon,
    PaperPlaneIcon,
} from "@radix-ui/react-icons";

// 打开连接
const openBlankLink = (link: string) => {
    window.open(link, "_blank");
};
const Footer = () => {
    return (
        <div className="absolute left-0 right-0 bottom-6 min-h-10 flex items-center justify-center">
            <div className="">
                <div className="flex items-center justify-center mt-4 gap-6">
                    <TwitterLogoIcon
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => openBlankLink("https://x.com/Terramint")}
                    ></TwitterLogoIcon>
                    <GitHubLogoIcon className="h-6 w-6 cursor-pointer"></GitHubLogoIcon>
                    <PaperPlaneIcon
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => openBlankLink("https://t.me/Terramintm")}
                    ></PaperPlaneIcon>
                </div>
            </div>
        </div>
    );
};

export default Footer;
