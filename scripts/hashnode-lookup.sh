#!/bin/bash
# Look up your Hashnode publication ID
source scripts/.env.syndication
curl -s -X POST https://gql.hashnode.com \
  -H "Content-Type: application/json" \
  -H "Authorization: $HASHNODE_TOKEN" \
  -d '{"query":"query { me { publications(first:10) { edges { node { id title url } } } } }"}' \
  | python3 -m json.tool
