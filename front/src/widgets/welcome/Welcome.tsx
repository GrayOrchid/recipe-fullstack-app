import { motion } from 'framer-motion';
import { WelcomeBg } from '@/shared/assets/images';
import './welcome.scss';

const Welcome = () => {
    return (
        <div className='welcome'>
            <motion.img
                className='welcome__bg'
                src={WelcomeBg}
                alt="welcome-bg"
                initial={{ opacity: 0, scale: 4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <div className='welcome__text'>
                <motion.h1
                    className='welcome__title'
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{
                        duration: 0.8,
                        delay: 0.8,
                        ease: "easeOut"
                    }}
                >
                    React Food
                </motion.h1>
                <motion.p
                    className='welcome__subtitle'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1.3
                    }}
                >
                    Готовьте, создавайте, делитесь и наслаждайтесь едой вместе с нами
                </motion.p>
            </div>
        </div>
    );
};

export default Welcome;