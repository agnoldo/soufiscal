#!/bin/bash

# ids obtidos com xidel convenios_municipio_11772.json -e "convenios/id"
# depois usei substituição com expressão regular para trocar id_convenio=([0-9]*) por id_convenio=\1 -O ordensbancarias_convenio_\1.json

wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=121257 -O ordensbancarias_convenio_121257.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=54108 -O ordensbancarias_convenio_54108.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=64602 -O ordensbancarias_convenio_64602.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=49384 -O ordensbancarias_convenio_49384.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=39367 -O ordensbancarias_convenio_39367.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=25778 -O ordensbancarias_convenio_25778.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=121586 -O ordensbancarias_convenio_121586.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=85589 -O ordensbancarias_convenio_85589.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=93702 -O ordensbancarias_convenio_93702.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=65906 -O ordensbancarias_convenio_65906.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=95612 -O ordensbancarias_convenio_95612.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=69148 -O ordensbancarias_convenio_69148.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=9882 -O ordensbancarias_convenio_9882.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=44858 -O ordensbancarias_convenio_44858.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=52674 -O ordensbancarias_convenio_52674.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=99316 -O ordensbancarias_convenio_99316.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=106025 -O ordensbancarias_convenio_106025.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=116402 -O ordensbancarias_convenio_116402.json
wget http://api.convenios.gov.br/siconv/v1/consulta/ordens_bancarias.json?id_convenio=97041 -O ordensbancarias_convenio_97041.json

