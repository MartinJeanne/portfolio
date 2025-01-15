# Portfolio
Work in progress of a new portfolio.\
Made with Wordpress.\

## Dump wordpress database
```bash
docker exec -i db mysqldump -u martin -pmartin wordpress --skip-comments --no-tablespaces > backup.sql```
```