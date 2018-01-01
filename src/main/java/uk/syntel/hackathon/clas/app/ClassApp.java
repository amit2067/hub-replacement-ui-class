package uk.syntel.hackathon.clas.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"uk.syntel.hackathon.clas.app"})
public class ClassApp 
{
    public static void main( String[] args )
    {
        SpringApplication.run(ClassApp.class, args);
    }
}
