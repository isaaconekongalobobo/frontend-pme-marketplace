import Header from "../components/header";
import BtnSubmition from "../components/btnSubmition";
import ConnexionLink from "../components/connexionLink";
import Input from "../components/input";
import {motion} from 'framer-motion'

const fieldsetVariant = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            delay: 0.5
        }
    }
}
const imgVariant = {
    initial: {
        opacity: 0,
        x: -30,
    },
    animate: {
        opacity: 1,
        x:0,
        transition: {
            delay: 0.5
        }
    }
}
const btnDivVariant = {
    initial: {
        opacity: 0,
        left: 30
    },
    animate: {
        opacity: 1,
        left: 0,
        transition: {
            delay: 1
        }
    }
}

const Step1 = () => {
    return (
        <main className='flex justify-center items-center p-8 w-screen bg-breaked-white h-screen'>
            <form className='bg-white p-9 pl-8 pr-8 shadow-lg rounded-2xl flex flex-col sm:flex-row gap-5 items-center ' >
                <motion.img src="/img-step-1.jpg" className="~w-40/60" variants={imgVariant} initial="initial" animate="animate" />
                <div className="flex flex-col gap-5 ">
                    <Header title="Créez un compte"/>

                    <motion.fieldset className="flex flex-col gap-3" variants={fieldsetVariant} initial="initial" animate="animate"  >
                        <Input type="text" name="entrepiseName" placeholder="Nom de l'entreprise"/>
                        <Input type="email" name="email" placeholder="E-mail"/>
                    </motion.fieldset>

                    <motion.div className="flex flex-col items-center gap-2" variants={btnDivVariant} initial="initial" animate="animate" >
                        <BtnSubmition text="Suivant" />
                        <ConnexionLink/>
                    </motion.div>
                </div>
            </form>
        </main>
    );
}

export default Step1;
