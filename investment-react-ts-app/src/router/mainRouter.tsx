import { createBrowserRouter, Navigate } from "react-router-dom";
import QuestionnaireForm from "../components/questionnaire/QuestionnaireForm";
import Layout from "../components/home/Layout";
import ShowInvestmentPortfolio from "../components/investmentPortfolio/ShowInvestmentPortfolio";
import Login from "../components/customers/Login";
import SafeRoutingQuestionnaire from "./SafeRoutingQuestionnaire";
import SafeRoutingPortfolio from "./SafeRoutingPortfolio";
import SafeRoutingAnonymise from "./SafeRoutingAnonymise";
import SafeRoutingIdentified from "./SafeRoutingIdentified";
import ManageRouteHome from "./ManageRouteHome";
import ManageRouteRegister from "./ManageRouteRegister";


const MainRouter = createBrowserRouter([
    {
        path: "/", element: <Layout/>,
        children: [
            {path: "/", element:<Navigate to="/home"/>},
            {path: "/home", element: <ManageRouteHome/>},
            {path: "/register", element: <ManageRouteRegister/>},
            {path: "/questionnaire", 
                element: (
                <SafeRoutingIdentified>
                    <SafeRoutingQuestionnaire>
                        <QuestionnaireForm/>
                    </SafeRoutingQuestionnaire>
                </SafeRoutingIdentified>
                    )
            },
            {path: "/investmentPortfolio", 
                element: (
                <SafeRoutingIdentified>
                    <SafeRoutingPortfolio>
                        <ShowInvestmentPortfolio/>
                    </SafeRoutingPortfolio>
                </SafeRoutingIdentified>
                )
            },
            {path: "/connect", 
                element: ( 
                <SafeRoutingAnonymise>
                    <Login/>
                </SafeRoutingAnonymise>
                )
            }
        ]
    }
],
{
    future: {
        v7_fetcherPersist: true,
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    }
}

);

export default MainRouter;