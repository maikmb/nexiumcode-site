"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    show: boolean;
    };

    export default function Intro({ show }: Props) {
    return (
        <AnimatePresence>
        {show && (
            <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="
                fixed inset-0 z-999
                flex items-center justify-center
                bg-[#020617]"
            >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col items-center"
            >
                <Image
                src="/logo.png"
                alt="Nexium Code"
                width={140}
                height={140}
                className="mb-4"
                />

                <h1 className="text-4xl font-bold text-white">
                Nexium<span className="text-blue-400">Code</span>
                </h1>

                <p className="text-gray-400 mt-3 tracking-widest text-sm">
                SOLUÇÕES DIGITAIS
                </p>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
}