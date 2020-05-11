FROM wordpress:latest
COPY php.ini /usr/local/etc/php/
RUN apt-get update && apt-get install -y less wget subversion default-mysql-client unzip
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer require "squizlabs/php_codesniffer=*"
RUN composer require "fabpot/php-cs-fixer"
RUN curl --location --output /usr/local/bin/mhsendmail https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64
RUN chmod +x /usr/local/bin/mhsendmail
RUN echo 'sendmail_path="/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025 --from=no-reply@docker.dev"' > /usr/local/etc/php/conf.d/mailhog.ini
