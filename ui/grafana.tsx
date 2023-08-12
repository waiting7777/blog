"use client";

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

var faro = initializeFaro({
  url: 'https://faro-collector-prod-us-east-0.grafana.net/collect/d322198daa80720820685a5fc4c7bc27',
  app: {
    name: 'blog',
    version: '1.0.0',
    environment: 'production'
  },
  instrumentations: [
    // Mandatory, overwriting the instrumentations array would cause the default instrumentations to be omitted
    ...getWebInstrumentations(),

    // Initialization of the tracing package.
    // This packages is optional because it increases the bundle size noticeably. Only add it if you want tracing data.
    new TracingInstrumentation(),
  ],
});

function Grafana() {
  const pathname = usePathname()

  useEffect(() => {
    faro.api.pushLog(['hello world']);
  }, [])

  useEffect(() => {
    faro.api.pushEvent(`pageview: ${pathname}`)
  }, [pathname]);

    return null
}

export default Grafana