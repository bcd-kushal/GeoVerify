
<!--- BEAUTIFISH ----------------->






<!--- ERRORISTIC ----------------->






<!--- GITTY ----------------->
--command structure:
{command} {username/log} {options}

{command}:
    <!-- automated monitorance -->
    monitor_contributions
    <!-- read api data -->
    get_user_info
    get_user_repositories
    get_daily_contributions
    get_todays_contributions



{username}:
    default     registered user's github username
    else        mention desired github username
{log}:
    --help      logs out help for this service
    --commands  log out all supported commands
    --version   log out current version of gitty
    --about     log out the about section of gitty


{options}:
    -s      saves the data in json format
    