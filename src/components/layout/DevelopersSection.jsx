import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import * as motion from "motion/react-client";

export default function DevelopersSection() {
  const developers = [
    {
      name: "Simone Roy Abello",
      role: "Lead Developer",
      image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-1/311589889_5378472742205878_3979587090125680019_n.jpg?stp=c142.118.1764.1765a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHPhSgiUEcoexZ4QUWUPAGBTMeFeqhG85tMx4V6qEbzmxyd2AptS9XqnWzCPuWx6nk2q5VgsrC6VDuK8pGiWBfr&_nc_ohc=Nq_Efdez5DIQ7kNvwH8EFnY&_nc_oc=Adkvo16yblYEgD42qN_kNKjOr4jwLELSQcpNlcFQdTwrcK-kYt7zmj_Ryc4OJGH-JESyz_TX7mO-VjQo_p5fq3bi&_nc_zt=24&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=h5QZZCC-Wtz-mLpY4PRkRg&oh=00_Aff2lVopRItLPcc4cQLtrkP1y4UIti8DulnvGo9a-RwSvQ&oe=68EAE9A6",
    },
    {
      name: "Mark Robert Bayudang",
      role: "Project Manager",
      image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-1/472395690_611916484845205_6580841113125068333_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHbdcJsM_wrv5Gz4fFmQWlOr3UITBElXdavdQhMESVd1nv71LfnpaJExe3ExJeWyLddNdnZ8xFQYHfmteeE444K&_nc_ohc=7F6BjhsJGewQ7kNvwHM-d_1&_nc_oc=Adl_ga0NO-eTlf6l2NWug9QhtLDeTRc-4wjy_MFzYLmHEojb80yO-FrvxpiWdFgqDqubsABstOApMjjn3Tq68Zmw&_nc_zt=24&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=ZaK1oPGZC6crtPSPaU0SEQ&oh=00_AffFHR5O0Bmpjpn-tTvymlRLPvqoboGu2BwCGEGk6XbyiQ&oe=68EAEB4D",
    },
    {
      name: "Justine Cedric Ocampo",
      role: "UI/UX Designer",
      image: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-1/453876734_3093663570770755_5525079018729637494_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEOXmp4sdYZtfQ_8JiF2ISpzcunevpjjrjNy6d6-mOOuFtLyNAREM37Bbpwg6c4bs3qudtoG394IeSafgduSsyE&_nc_ohc=-ZHCegbNp_4Q7kNvwH4woHA&_nc_oc=AdnkSTAI2SViEQtzmEO16Y95qAtKHd-CgYNiFfJQ15zWbRIeoP23ooatyByUC6szAU824gzMEsoiU9JWZwaqLYZZ&_nc_zt=24&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=oa4rvRn6MgZfid760sdO2A&oh=00_AffQ4T4ayszDBbZf8FDJ8wHnookOrzM64NTh3zWQLdcyww&oe=68EAD426",
    },
    {
      name: "Nina Nambio",
      role: "Frontend Developer",
      image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-1/544644395_764796222927968_2830372539729508941_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEHvYCXwJP3askq3rLj6J0t8QYcYiaUkE7xBhxiJpSQTvZKQkG3TI2IWvJZZow4NyLL0FXVfudjY8uPJ4KZDrlu&_nc_ohc=_LZvCdF5n0MQ7kNvwFUvg-1&_nc_oc=Adns9p8aKTZeD3edOIsbItVbupj3urINOB44bQ8Xa231Q-AcPu33czOoeNjc2yMu0GaF4XTy3kt2aP_-CcrBLX0c&_nc_zt=24&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=MF8bO8K_TREJJAZtj6gyUg&oh=00_AffHR2GszCK_VE8DWCeuMIsN2nkvYBqwpP64K1jwXuO5Tg&oe=68EB052B",
    },
    {
      name: "Jose Louis Ortega",
      role: "Fullstack Developer",
      image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-1/474556988_9538879479478848_1146059758551105760_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGBS0k5ZGUhwbRdCJ8VQHQj2EgK5Z3x-43YSArlnfH7jQkbICbLMHk5uVazCcIQVjilai1mupXyWTA9Duo26XvM&_nc_ohc=aIzAf4MJwuUQ7kNvwHaq2cC&_nc_oc=AdkIel_em9omvGie8EicipezcgSgkUb2hxVZE658F2QFo9mdM8TIkqTnxeJ2GPFj2LfNKcSKAxbhf8_kAK3P0Jch&_nc_zt=24&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=pzNX1apB616fixoL1ULaXQ&oh=00_AffoSxdtufDEkwz9Qa9I13u55DG_FUOzLL6cPhdmAyiNUg&oe=68EB05E5",
    },
    {
      name: "AJ Ignacio",
      role: "QA Engineer",
      image: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeE06wGfS0U_yF-el2SiLnFIWt9TLzuBU1Ba31MvO4FTUM4NhqqfAsvsdnlEbyi7iJLW-zsF585doIf82hNJz0Xk&_nc_ohc=pZvdryK-N40Q7kNvwEeKEWd&_nc_oc=AdnGK3TZ37mpjZLM4j59Qn4_fWwvJfmMwlLwDlnfJZe8AVgjwfD0gllzKUC5vysCK5vnGG-ujPFQzZNsLyoZmlKu&_nc_zt=24&_nc_ht=scontent.fmnl4-6.fna&oh=00_AffWhojCkr3zxtGOSk1afaXm3EZePIg9wMuV7rvcsXPPOA&oe=690C9A7A",
    },
  ];

  return (
    <section className="relative px-4 py-16 md:py-24 bg-cover bg-center bg-no-repeat">
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-secondary-foreground text-xl font-medium">
            <Users className="w-8 h-8 text-pink-300" />
            <h1 className="text-pink-300">Meet the Team</h1>
          </div>
          <h2 className="text-4xl font-bold mt-4 text-pink-400">
            Our Developers
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-pink-100">
            The talented team behind BrainBoost Games.
          </p>
        </div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden:{ opacity: 0},
          visible:{
            opacity:1,
            transition:{staggerChildren:0.2}
          }
        }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              whileHover={{scale:1.1}}
              variants={{
                hidden:{opacity:0, y:40},
                visible:{opacity:1, y:0}
              }}
            >
              <Card className="bg-transparent border p-10 hover:border-pink-700 cursor-pointer transition">
                <CardContent className="pt-6 text-center">
                  {dev.image ? (
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto border-purple-700 border-4"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mx-auto text-gray-700 font-bold text-lg">
                      No Image
                    </div>
                  )}

                  <h3 className="font-semibold text-lg mt-4 text-white">
                    {dev.name}
                  </h3>
                  <p className="text-sm text-pink-200">{dev.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
