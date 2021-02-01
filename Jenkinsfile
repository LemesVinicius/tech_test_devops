pipeline {
  agent any

  stages {
    stage('Install') {
      agent {
        docker { image 'node:14-alpine' }
      }
      steps {
        sh 'npm ci'
      }
    }
  stage('Test') {
      agent {
        docker { image 'node:14-alpine' }
      }
      steps {
        sh 'npm ci'
        sh 'npm run test'
      }
  }
    stage('Security') {
      agent {
        docker { image 'node:14-alpine' }
      }
      steps {
        sh 'npm audit'
      }
    }
    stage('Code Quality') {
      agent {
        docker { image 'node:14-alpine' }
      }
      steps {
        sh 'npm run Sonar'
      }
    }
    stage('Build') {
      agent {
        docker { image 'node:14-alpine' }
      }
      steps {
        sh 'npm run build'
      }
    }
    stage('Build and push docker image') {
      agent any

      steps {
        sh 'docker build -t docker-registry.com/flights-api:latest . '
        sh 'docker push docker-registry.com/flights-api:latest'
      }
    }
    stage('Deploy') {
      agent {
        docker { image 'aws-cli' }
      }
      steps {
        echo "TODO"
      }
    }
  }
}
