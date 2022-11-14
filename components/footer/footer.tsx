import React from 'react';
import Image from "next/image";

function Footer() {
    return (
        <div>
            <footer className="flex flex-row mt-auto h-24 w-full items-center justify-center border-t">
                <p className="text-gray-500">
                    © 2019 by STI GmbH. All Rights Reserved. {' '}
                </p>
            </footer>
        </div>
    );
}

export default Footer;