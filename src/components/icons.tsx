type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
        >
            <rect width="256" height="256" fill="none" />
            <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg
            {...props}
            height="23"
            viewBox="0 0 1200 1227"
            width="23"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    radix: (props: IconProps) => (
        <svg viewBox="0 0 25 25" fill="none" {...props}>
            <path
                d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                fill="currentcolor"
            ></path>
            <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
            <path
                d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                fill="currentcolor"
            ></path>
        </svg>
    ),
    aria: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
        </svg>
    ),
    npm: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
                fill="currentColor"
            />
        </svg>
    ),
    yarn: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
                fill="currentColor"
            />
        </svg>
    ),
    pnpm: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
                fill="currentColor"
            />
        </svg>
    ),
    react: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                fill="currentColor"
            />
        </svg>
    ),
    tailwind: (props: IconProps) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                fill="currentColor"
            />
        </svg>
    ),
    google: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    ),
    apple: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
            />
        </svg>
    ),
    paypal: (props: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                fill="currentColor"
            />
        </svg>
    ),
    spinner: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
    menu: (props: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
            ></path>
        </svg>
    ),
    binance: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 90 23"
            {...props}
        >
            <path
                fill="#fff"
                d="m18.148 6.967-2.404 2.378-4.362-4.468L7.08 9.21 4.594 6.672 11.244 0zM4.576 15.78l2.373-2.408 4.288 4.494c1.732-1.482 3.066-3.08 4.566-4.447l2.36 2.442c-2.22 2.224-4.524 4.552-6.766 6.807zM34.117 6.514l.684.478c.333.221.6.529.774.891a2.257 2.257 0 0 1-.192 2.276 2.222 2.222 0 0 1-.911.747 3.743 3.743 0 0 1-1.399.382c-1.552.047-3.111.018-4.732.018V2.305c1.786-.012 3.587-.234 5.34.254 1.655.458 2.125 2.315.985 3.61-.116.13-.31.192-.549.345m-3.988 3.15c1.047-.07 2.038.152 3.028-.146a.9.9 0 0 0 .532-.338.918.918 0 0 0 .184-.607.895.895 0 0 0-.229-.642.876.876 0 0 0-.614-.284c-.96-.065-1.928-.018-2.903-.018v2.036zm-.024-3.728c.848.047 1.69.126 2.52-.041a.896.896 0 0 0 .771-.909.837.837 0 0 0-.672-.877 5.81 5.81 0 0 0-2.618-.024zM63.081 2.316h1.62l4.069 5.347.23-.076V2.335h1.802v8.896H69.22l-4.117-5.397-.244.067c-.098.859-.032 1.729-.043 2.595-.011.865 0 1.782 0 2.742h-1.731zM44.498 5.834v5.393h-1.823V2.332h1.684c1.407 1.735 2.663 3.615 4.117 5.335l.184-.089v-5.23h1.749v8.883h-1.531L44.73 5.774zM82.723 11.225V2.329h6.653V4.05h-4.652v1.896h4.103v1.625h-4.103v2.038h4.644v1.61zM61.417 11.275h-1.92l-.863-1.98h-3.845l-.845 1.962h-1.865c1.286-3.036 2.527-5.994 3.776-8.96h1.773zm-5.91-3.745c.89.117 1.609.185 2.408-.052l-1.09-2.646h-.22zM80.867 3.549c-.055.12-.12.233-.195.34-.282.322-.577.633-.89.972-.836-.556-1.662-1.128-2.707-.927a2.634 2.634 0 0 0-1.61.979 3.168 3.168 0 0 0 .085 3.908c1.01 1.174 2.315 1.153 4.323-.078.184.17.394.347.589.536.192.189.332.352.49.523-1.161 1.842-4.471 2.24-6.381.667-2.046-1.682-2.258-4.819-.518-6.84 1.644-1.91 5.545-1.813 6.814-.08M28.327 17.544v-.768h34.578l.068.768zM78.9 14.1c1.103 0 2.13-.009 3.164 0 .692 0 1.252.264 1.543.945.29.682.089 1.25-.42 1.746-.067.077-.129.16-.183.248.084.086.174.163.269.233.627.358.919.912.791 1.612-.127.7-.62 1.225-1.358 1.297-1.237.131-2.482.185-3.809.274zm1.027 5.34c.833-.036 1.616-.036 2.39-.12a.82.82 0 0 0 .512-.274.832.832 0 0 0 0-1.095.814.814 0 0 0-.513-.274c-.8-.07-1.608-.02-2.398-.02zm0-2.747c.639.028 1.279.023 1.916-.018.435-.05.808-.319.83-.832.021-.513-.292-.813-.772-.844-.646-.043-1.3-.012-1.975-.012v1.706zM39.8 2.34v8.913H38.08V2.34zM77.577 20.351h-1.052l-.687-1.564h-3.014l-.735 1.572h-.994c.92-2.144 1.825-4.228 2.746-6.363l.962-.051zm-2.142-2.55-1.126-2.595c-.412.99-.736 1.76-1.083 2.595zM85.246 19.436l.468-.634c.551.238 1.045.54 1.59.67.543.13 1.102.135 1.582-.453l.033-.741a2.535 2.535 0 0 0-.54-.37c-.55-.186-1.102-.32-1.654-.507-.935-.323-1.335-.895-1.285-1.774a1.76 1.76 0 0 1 .459-1.083 1.74 1.74 0 0 1 1.033-.55c.989-.157 1.937-.014 2.81.713l-.464.689c-.905-.34-1.779-1.03-2.744-.122v.9c.464.186.933.371 1.41.543.256.093.532.121.786.215.92.34 1.353.997 1.246 1.896-.058.4-.247.767-.536 1.046-.29.279-.662.453-1.06.494-1.124.13-2.19-.035-3.134-.932M2.48 9.03l2.36 2.363-2.45 2.349L0 11.316z"
            ></path>
            <path
                fill="#fff"
                d="m11.503 8.924 2.262 2.278-2.477 2.42-2.206-2.247zM20.24 13.677l-2.274-2.293 2.404-2.408 2.232 2.322zM65.656 14.154h.984v5.265h3.264v.906h-4.25v-6.17z"
            ></path>
        </svg>
    ),
    coinhall: (props: IconProps) => (
        <svg
            data-hk="0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-0-0-0-1-0-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-5-1-1-0"
            viewBox="0 0 153.45833 153.45834"
            version="1.1"
            id="svg777"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs id="defs774"></defs>
            <g id="layer1">
                <path
                    id="path829"
                    d="M 60.854168,121.70833 A 42.333332,42.333332 0 0 1 30.919981,109.30919 42.333332,42.333332 0 0 1 18.520836,79.375 h 42.333332 z"
                    style={{
                        fill: "#ddd6fe",
                        fillOpacity: "1",
                    }}
                ></path>
                <path
                    id="path829-2"
                    d="m -92.604164,-79.375011 a 42.333332,42.333332 0 0 1 -29.934186,-12.399147 42.333332,42.333332 0 0 1 -12.39915,-29.934182 h 42.333336 z"
                    transform="scale(-1)"
                    style={{
                        fill: "#a78bfa",
                        fillOpacity: "1",
                    }}
                ></path>
                <path
                    id="path829-5"
                    d="M 74.083336,-18.520836 A 42.333332,42.333332 0 0 1 44.149149,-30.919982 42.333332,42.333332 0 0 1 31.750004,-60.854168 h 42.333332 z"
                    transform="rotate(90)"
                    style={{
                        fill: "#ede9fe",
                        fillOpacity: "1",
                    }}
                ></path>
                <rect
                    id="rect979"
                    width="21.166666"
                    height="42.333332"
                    x="66.145828"
                    y="31.750002"
                    style={{
                        fill: "#f5f3ff",
                        fillOpacity: "0.264583",
                    }}
                ></rect>
                <rect
                    id="rect979-6"
                    width="21.166666"
                    height="42.333332"
                    x="66.145828"
                    y="79.375008"
                    style={{
                        fill: "#c4b5fd",
                        fillOpacity: "1",
                        strokeWidth: "0.264583",
                    }}
                ></rect>
            </g>
        </svg>
    ),
    okx: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            viewBox="0 0 39 21"
            {...props}
        >
            <path fill="url(#okx_svg__a)" d="M0 .111h38.871v19.991H0z"></path>
            <defs>
                <pattern
                    id="okx_svg__a"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use
                        xlinkHref="#okx_svg__b"
                        transform="scale(.01429 .02778)"
                    ></use>
                </pattern>
                <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAkCAYAAAA0EkzVAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUk9kSgO//p4cEAgmRTuhNkE4AKaGHLh1shCRAKCEGQrMjiyu4FkREQFnQVREF1wLIWhBRbIuAgg1dkEVEWRcLNizvB5bg7jvvvfMmZ858mcydmXvPvedMACDTOCJRCkwBIFWYIQ7xdmNERccwcCOABChAARgAMoebLmIFB/sDRGbt3+VtH4Cm7C3TqVz//vt/FXkeP50LABSMcBwvnZuK8ElEX3BF4gwAUPsRv05WhmiKryBMEyMNItw/xQkzPD7FcdOMRk/HhIW4I6wEAJ7E4YgTACDpIn5GJjcByUPyQNhcyBMIEUa+A+fU1DQewkhdYIjEiBCeys+M+yZPwt9yxklzcjgJUp7Zy7TgPQTpohROzv95HP9bUlMkszX0ESUlin1CEEtHzuxucpqflIVxgUGzLOBNx09zosQnfJa56e4xs8zjePhJ16YE+s9yvMCLLc2TwQ6bZX66Z+gsi9NCpLXixe6sWeaI5+pKksOl/kQ+W5o/NzEscpYzBRGBs5yeHOo3F+Mu9YslIdL++UJvt7m6XtK9p6Z/s18BW7o2IzHMR7p3zlz/fCFrLmd6lLQ3Ht/Dcy4mXBovynCT1hKlBEvj+SneUn96Zqh0bQZyIefWBkvPMInjGzzLwAN4An/kwwDBwBJYAwvARHwgg589dUeBe5ooRyxISMxgsJBXxmewhVyz+QxLc0srAKbe7MyVeH13+i1CdPycL40EgO0TBNrmfJzfAWhe89dz+sunh8RQKgE4+4ErEWfO+KaeE8AAIpADNKAMNIAOMASmSH+2wBG4Ih37giAQBqLBMsAFiSAViEEWWAXWgwJQBLaBnaAcVIF94BA4Co6DJnAGXACXwXXQBXrBAzAAhsFzMA7egkkIgnAQGaJCypAmpAeZQJYQE3KGPCF/KASKhmKhBEgISaBV0AaoCCqGyqFqqBb6GToNXYCuQt3QPWgQGoVeQR9hFEyCabA6rA8vgJkwC/aDw+ClcAK8As6F8+EtcBlcAx+BG+EL8HW4Fx6An8MTKICSQdFRWihTFBPljgpCxaDiUWLUGlQhqhRVg6pHtaA6ULdQA6gx1Ac0Fk1FM9CmaEe0DzoczUWvQK9Bb0aXow+hG9Ht6FvoQfQ4+guGjFHDmGAcMGxMFCYBk4UpwJRiDmBOYS5hejHDmLdYLJaONcDaYX2w0dgk7ErsZuwebAO2FduNHcJO4HA4ZZwJzgkXhOPgMnAFuN24I7jzuB7cMO49XgavibfEe+Fj8EJ8Hr4Ufxh/Dt+DH8FPEigEPYIDIYjAI+QQthL2E1oINwnDhEmiPNGA6EQMIyYR1xPLiPXES8R+4msZGRltGXuZRTICmXUyZTLHZK7IDMp8ICmQjEnupCUkCWkL6SCplXSP9JpMJuuTXckx5AzyFnIt+SL5Efm9LFXWTJYty5NdK1sh2yjbI/tCjiCnJ8eSWyaXK1cqd0LuptwYhUDRp7hTOJQ1lArKacodyoQ8Vd5CPkg+VX6z/GH5q/JPFXAK+gqeCjyFfIV9ChcVhqgoqg7VncqlbqDup16iDtOwNAMam5ZEK6IdpXXSxhUVFK0VIxSzFSsUzyoO0FF0fTqbnkLfSj9O76N/nKc+jzWPP2/TvPp5PfPeKakquSrxlQqVGpR6lT4qM5Q9lZOVtys3KT9UQasYqyxSyVLZq3JJZUyVpuqoylUtVD2uel8NVjNWC1FbqbZP7YbahLqGure6SH23+kX1MQ26hqtGkkaJxjmNUU2qprOmQLNE87zmM4Yig8VIYZQx2hnjWmpaPloSrWqtTq1JbQPtcO087QbthzpEHaZOvE6JTpvOuK6mboDuKt063ft6BD2mXqLeLr0OvXf6BvqR+hv1m/SfGigZsA1yDeoM+g3Jhi6GKwxrDG8bYY2YRslGe4y6jGFjG+NE4wrjmyawia2JwGSPSfd8zHz7+cL5NfPvmJJMWaaZpnWmg2Z0M3+zPLMmsxcLdBfELNi+oGPBF3Mb8xTz/eYPLBQsfC3yLFosXlkaW3ItKyxvW5GtvKzWWjVbvbQ2seZb77W+a0O1CbDZaNNm89nWzlZsW287aqdrF2tXaXeHSWMGMzczr9hj7N3s19qfsf/gYOuQ4XDc4U9HU8dkx8OOTxcaLOQv3L9wyEnbieNU7TTgzHCOdf7RecBFy4XjUuPy2FXHled6wHWEZcRKYh1hvXAzdxO7nXJ75+7gvtq91QPl4e1R6NHpqeAZ7lnu+chL2yvBq85r3NvGe6V3qw/Gx89nu88dtjqby65lj/va+a72bfcj+YX6lfs99jf2F/u3BMABvgE7AvoD9QKFgU1BIIgdtCPoYbBB8IrgXxZhFwUvqlj0JMQiZFVIRyg1dHno4dC3YW5hW8MehBuGS8LbIuQilkTURryL9IgsjhyIWhC1Oup6tEq0ILo5BhcTEXMgZmKx5+Kdi4eX2CwpWNK31GBp9tKry1SWpSw7u1xuOWf5iVhMbGTs4dhPnCBODWcijh1XGTfOdefu4j7nufJKeKN8J34xfyTeKb44/mmCU8KOhNFEl8TSxDGBu6Bc8DLJJ6kq6V1yUPLB5K8pkSkNqfjU2NTTQgVhsrA9TSMtO61bZCIqEA2scFixc8W42E98IB1KX5renEFDhqMbEkPJd5LBTOfMisz3WRFZJ7Lls4XZN3KMczbljOR65f60Er2Su7Jtldaq9asGV7NWV6+B1sStaVurszZ/7fA673WH1hPXJ6//Nc88rzjvzYbIDS356vnr8oe+8/6urkC2QFxwZ6Pjxqrv0d8Lvu/cZLVp96YvhbzCa0XmRaVFnzZzN1/7weKHsh++bonf0rnVduvebdhtwm192122HyqWL84tHtoRsKOxhFFSWPJm5/KdV0utS6t2EXdJdg2U+Zc179bdvW33p/LE8t4Kt4qGSrXKTZXv9vD29Ox13VtfpV5VVPXxR8GPd6u9qxtr9GtK92H3Ze57sj9if8dPzJ9qD6gcKDrw+aDw4MChkEPttXa1tYfVDm+tg+skdaNHlhzpOupxtLnetL66gd5QdAwckxx79nPsz33H/Y63nWCeqD+pd7LyFPVUYSPUmNM43pTYNNAc3dx92vd0W4tjy6lfzH45eEbrTMVZxbNbzxHP5Z/7ej73/ESrqHXsQsKFobblbQ8uRl283b6ovfOS36Url70uX+xgdZy/4nTlzFWHq6evMa81Xbe93njD5sapX21+PdVp29l40+5mc5d9V0v3wu5zPS49F2553Lp8m337em9gb3dfeN/dO0vuDNzl3X16L+Xey/uZ9ycfrOvH9Bc+pDwsfaT2qOY3o98aBmwHzg56DN54HPr4wRB36Pnv6b9/Gs5/Qn5SOqI5UvvU8umZUa/RrmeLnw0/Fz2fHCv4Q/6PyheGL07+6frnjfGo8eGX4pdfX21+rfz64BvrN20TwROP3qa+nXxX+F75/aEPzA8dHyM/jkxmfcJ9Kvts9Lnli9+X/q+pX7+KOGLO9CiAQhSOjwfg1UEAyNEAULsAIC6emamnBZr5HzBN4D/xzNw9LbYA1K4DIAzRgFYA9rgiIy2icggHIzbMFcBWVlKdnX+nZ/UpoRwBoKvN3C4qrO/hEAz+ITNz/Dd9/9MCada/2X8B+SkIhOPsFRsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAEagAwAEAAAAAQAAACQAAAAArh8GDwAABnpJREFUaAXtmQuIVFUYx2dmZ19u+26NzFUpNVFqzSgWKbCXWZHFEkZFIREFm5FED4mk1baIQpJYI6hwocheYrahZVS2ErRmWiuBRabtumn7mtnZ9+7sTL//zL3Dnbv3ro82wrgf/Od8j/N955zv3HvOnHP98Xj8t46Ojot8k0RlZWWdhKr0+/2HFZL4zxD/Oafw1F1PvWedbCfxq8FvnRH/Asr9tDHVHof4LejmUHfEbiP+nNHR0X3hcLjAbpNfAKXfbphkeaL4av9MyBrTyjvFOpndySdwph1zCva/0nmJcZlOLzFeYlwy4KIOuuh9gUAgVlpaWo+9xaFO7vDw8MORSOQcB9vpqJawO7zg4tDG7lDjYmuw6Dvg11P3XIvOZCMwq2kj31DEKc3FOJSZmVmL3xSzsqVsd01MTk7OMBU3stUdtDgkWBrKyM7OvgPhHyWGLfYqYgjjiA7X0vbacQabgjrq5yabOiHSz/L+/v5fBgYGcu124h9CdwX+fXabZG+NccqKlxiXrHiJ8RLjngEXi7fGuCTGdVcaGRnJysvLe4qV/XcH33wOYKUO+tNSsTM04vCFi1OEtte72D5lN9krG3WyKapBsWQbRRnD08Bp99TB8jH8nXJw3EmZiB2NRjPYTu+xNTTZYiMDrHUKSod1KnfcrknoGD6JxFCWgTUTnK7nGlt6WjPEn+h0fexsfZXMP2lpg51M4WxNzGTmwDGWlxjHtHj/fF3ScvYmRofBf5X8rM7304LuTSeLegn0OjvBkAIS/zKKW8RDGpBeX+0qGWAn9fZRjiP8KlHeMM6QVGi7PiCWejodPwSctuRj6OupOy6R+Kn+gyAP2OmEXeHJXga8DHgZ8DLgZeC/y4C261tpvgiMgu1sbYPodBZZAbKA7kS3g2XA6UR9FJ89+FyP/XwwCHah0+lYn34XA9EOoK11CXCjzzDok6np8xVx2ohzMborDaddlD3gdpBp6FTo7reZ+rrL1TauC3D9TbDWkUlkxtU4Z4NrwHmgHei0f0QB3mpvb4/zDXcEfjlK6Waii0kPvW/omiTbgf09w75DNiPOy+iDoMqsD7/IKpt6a4m9Etxn6uCVbPXncYvuRuRpQ0NDEVNnluh6sL0CcsBMbghCps1aYjPHeS9fOgatNi7O+7BvCNJuA59KVnL/osyqI5+A24Afvf4YvQ1SJB2fVax3NMdTRhjFGRwcrM7NzVUcO4W5MjiMMtDV1TUrFov59TUiPz//mFHR8cYem+tpmnid2Lt6e3tnMsiCYDD4SHFx8RZ0fxkxfSUlJeGMjIwuU6YcYvDTKV8kmTnEaIXfDxaMjY3prfhOidnNQJu5z1gIr9lQghIZRd8Cr1cgRTQSQngSRIEue/aANOrr65tCYl5FWZdm8Pm+Rp4L8oh9iDankZQjyAuMepqIRQZ/qsU2KlYTp4pJ2aJ7JOR5IJUYkqI+vglEbUBJqCCZJVJAeoUaQB11NaZvg7yTYZLxMcJCZnE2Hb4O/lIg2oY9lmSTv52dnSXM8ruS6IySpIT2SxbpQ11WVlaUWBXEejSpTf4SSwOnubjKFFnbsJnMOml9MJVGqbWnFlzNExigbxqYJjRFoVDoZp6kpVLQZ43pLtr5A/4oT8w8JuhyTG8w6T0kZi/8Oj0xoq2gRoEpN1GxzPjgJn0aMehRAuosocH1Aj05KSIZrQgNxFgFLkkZzozR7IucFtCEgTYqYASf0bfXYBtBuXSioqKiXpIRhtUrGZEOOURyqniNViEu7unpmd/d3V0EvxRdvpmYnxEOaiDgQjkyeK3uP4q3UmFhodaUu4EOgiJ7pwfQPU+8a4k1P1Hj9H60ZpikV/tXBD3FPmZdk6DJSBHtNCMU0NYs+qYnWAfYmPXJQ96JfiNQYmQzv0yuRP4B1OGrXWmz4lDOSCQGR+rG61FsACa9g37cYsgrUs7rohlJEAvdBzBKVIrwO0G8NczgR7pUTxlOjWlisO10cCptraatVawbieTTlpL0Eyi0hGqC/5J6W+SD71rafsBi9xHnTuwrTB1xquDH0D+hDQAfTcYQ/tONOoqZJIKVgzZtV9rm4NOuIpB3y2YH+s2KQLnV2Oq+N2Rt1y+Z9eEXJVtK1J2CrG/K2ho1Y2mEbhk4wCI+wJo2phK5CWgtUFvTwJ+Gfx284n0jWds4/E1gOmg127eW6JcD/TX4XGPlFYryN2PUGPeH6Gf8DRpJysqKTrx7AAAAAElFTkSuQmCC"
                    id="okx_svg__b"
                    width="70"
                    height="36"
                ></image>
            </defs>
        </svg>
    ),
};
