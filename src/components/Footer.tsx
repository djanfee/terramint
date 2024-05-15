import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Footer = () => {
    return (
        <div className="absolute left-0 right-0 bottom-0 min-h-40 flex items-center justify-center">
            <div className="">
                <div className="flex items-center justify-center">
                    <Avatar>
                        <AvatarImage
                            src="/src/assets/mint.png"
                            alt="@terramint"
                        />
                        <AvatarFallback>@terramint</AvatarFallback>
                    </Avatar>
                    <span className="dark:text-whit text-2xl">TERRA MINT</span>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <p>
                        Copyright © 2023-2024 Terra Mint. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <p>contact@mintca.sh</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
