1. Create docker database instance (for local run):

        docker run --name ar_postgres --env POSTGRES_DB=quiz --env POSTGRES_USER=postgres --env POSTGRES_PASSWORD=password -p 5432:5432 --restart=always -d postgres:9.6.10
2. If you run remote, set folowing envieronment variables:
        
        POSTGRES_HOST = host where postgres instance running
        POSTGRES_PORT = port
        POSTGRES_DB = database name
        POSTGRES_USERNAME = username
        POSTGRES_PASSWORD = user password
        
3. For run from jar

        java -jar -Dspring.profiles.active=[spring profile] -DPOSTGRESS_HOST=[postgres db host] -DPOSTGRES_USERNAME=[postgres user] -DPOSTGRES_PASSWORD=[postgres pass] [path to jar].jar
