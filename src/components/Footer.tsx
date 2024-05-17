import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();
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
                    <p>{t("footer.copyRight")}</p>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <p>contact@terrami.nt</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
