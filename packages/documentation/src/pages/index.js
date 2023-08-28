import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import { version as SimpleAnimationVersion } from "../../../simple-animation/package.json";
import FeatureBlock from "../components/FeatureBlock";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title simple-animation sa-fade-in-and-slide-right">{siteConfig.title}</h1>
                <p className="hero__subtitle simple-animation sa-fade-in-and-slide-left sa-delay">{siteConfig.tagline}</p>
                <div className={styles.buttons}></div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout title={``} description="A collection of simple libraries and tools for web development.">
            <HomepageHeader />
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <FeatureBlock title="Simple Animation" link="docs/simple-animation">
                                    <p>Simple Animation is a library that provides ways to animate elements on a web page.</p>
                                </FeatureBlock>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
