# Estratégia de branches (Git Flow)

Este repositório foi configurado no padrão **Git Flow** com as branches principais:

- `main`: produção
- `develop`: desenvolvimento

## Convenções configuradas

- feature: `feature/*`
- bugfix: `bugfix/*`
- release: `release/*`
- hotfix: `hotfix/*`
- support: `support/*`

## Observação sobre instalação

Neste ambiente, a instalação do binário `git flow` via pacote do sistema ficou indisponível por bloqueio de acesso aos repositórios externos. Ainda assim, a estrutura e as configurações do Git Flow foram aplicadas diretamente no repositório (branches e chaves `gitflow.*` no `.git/config`).
