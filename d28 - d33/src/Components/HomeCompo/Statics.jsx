import { faCloudArrowDown, faHeadphones, faShield, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Statics = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FontAwesomeIcon icon={faCloudArrowDown} className="text-indigo-500 text-5xl mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Downloads</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FontAwesomeIcon icon={faUsers} className="text-indigo-500 text-5xl mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FontAwesomeIcon icon={faHeadphones} className="text-indigo-500 text-5xl mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                            <p className="leading-relaxed">Files</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <FontAwesomeIcon icon={faShield} className="text-indigo-500 text-5xl mb-3 inline-block" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                            <p className="leading-relaxed">Places</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statics;